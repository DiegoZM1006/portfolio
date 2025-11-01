"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  project_type: z.enum(["Web Development", "Mobile App", "UI/UX Design", "Other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
    // Estado para controlar el envío y mostrar mensajes
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
            // Hacemos una petición POST a nuestro API route
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus("success");
                form.reset(); // Limpia el formulario
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
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-[500px]">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-white">Full Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="off"
                    {...form.register("name")}
                    className="mt-1 block w-full border border-secondary rounded-md shadow-sm p-4 placeholder:text-secondary dark:text-white"
                />
                {form.formState.errors.name && <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-white">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="johnDoe@gmail.com"
                    autoComplete="off"
                    {...form.register("email")}
                    className="mt-1 block w-full border border-secondary rounded-md shadow-sm p-4 placeholder:text-secondary dark:text-white"
                />
                {form.formState.errors.email && <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="project_type" className="block text-sm font-medium text-primary dark:text-white">Project Type</label>
                <select
                    id="project_type"
                    {...form.register("project_type")}
                    className="mt-1 block w-full border border-secondary rounded-md shadow-sm p-4 text-primary dark:text-white"
                >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-white">Message</label>
                <textarea
                    id="message"
                    rows={2}
                    placeholder="Write your message here..."
                    {...form.register("message")}
                    className="mt-1 block w-full border border-secondary rounded-md shadow-sm p-4 placeholder:text-secondary dark:text-white"
                ></textarea>
                {form.formState.errors.message && <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>}
            </div>

            {/* Mensaje de éxito */}
            {submitStatus === "success" && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
                    ✅ Message sent successfully! I'll get back to you soon.
                </div>
            )}

            {/* Mensaje de error */}
            {submitStatus === "error" && (
                <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md">
                    ❌ Failed to send message. Please try again.
                </div>
            )}

            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-4 w-full bg-accent text-white rounded-md hover:bg-blue-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </div>
        </form>
    );
}