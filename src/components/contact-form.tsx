"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { en } from "../i18n/en";

type FormTranslations = typeof en.form;

interface Props {
    t: FormTranslations;
}

type FormValues = {
    name: string;
    email: string;
    project_type: "Web Development" | "Mobile App" | "UI/UX Design" | "Other";
    message: string;
};

export default function ContactForm({ t }: Props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const formSchema = z.object({
        name: z.string().min(2, t.errors.nameMin),
        email: z.string().email(t.errors.emailInvalid),
        project_type: z.enum(["Web Development", "Mobile App", "UI/UX Design", "Other"]),
        message: z.string().min(10, t.errors.messageMin),
    });

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            project_type: "Web Development",
            message: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus("success");
                form.reset();
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.log("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }

        setTimeout(() => {
            setSubmitStatus("idle");
        }, 3000);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-[500px]">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-white">{t.fullName}</label>
                <input
                    id="name"
                    type="text"
                    placeholder={t.namePlaceholder}
                    autoComplete="off"
                    {...form.register("name")}
                    className="mt-1 block w-full border border-secondary rounded-md shadow-sm p-4 placeholder:text-secondary dark:text-white"
                />
                {form.formState.errors.name && <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-white">{t.email}</label>
                <input
                    id="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    autoComplete="off"
                    {...form.register("email")}
                    className="mt-1 block w-full border border-secondary rounded-md shadow-sm p-4 placeholder:text-secondary dark:text-white"
                />
                {form.formState.errors.email && <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="project_type" className="block text-sm font-medium text-primary dark:text-white">{t.projectType}</label>
                <select
                    id="project_type"
                    {...form.register("project_type")}
                    className="mt-1 block w-full border border-secondary rounded-md shadow-sm p-4 text-primary dark:text-white"
                >
                    <option value="Web Development">{t.projectTypes.webDev}</option>
                    <option value="Mobile App">{t.projectTypes.mobileApp}</option>
                    <option value="UI/UX Design">{t.projectTypes.uiux}</option>
                    <option value="Other">{t.projectTypes.other}</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-white">{t.message}</label>
                <textarea
                    id="message"
                    rows={2}
                    placeholder={t.messagePlaceholder}
                    {...form.register("message")}
                    className="mt-1 block w-full border border-secondary rounded-md shadow-sm p-4 placeholder:text-secondary dark:text-white"
                ></textarea>
                {form.formState.errors.message && <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>}
            </div>

            {submitStatus === "success" && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
                    {t.success}
                </div>
            )}

            {submitStatus === "error" && (
                <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md">
                    {t.error}
                </div>
            )}

            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-4 w-full bg-accent text-white rounded-md hover:bg-blue-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {isSubmitting ? t.submitting : t.submit}
                </button>
            </div>
        </form>
    );
}
