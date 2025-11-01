import BounceCards from './ui/bounce-cards.tsx';

const images = [
  "./trip_1.jpg",
  "./trip_2.jpg",
  "./trip_3.jpg",
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
//   "rotate(0deg) translate(-50px)",
  "rotate(-5deg)",
//   "rotate(5deg) translate(50px)",
  "rotate(-5deg) translate(150px)"
];

export default function ImagesTrip() {
    return (
        <BounceCards
        className="custom-bounceCards"
        images={images}
        containerHeight={240}
        animationDelay={1}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.8)"
        transformStyles={transformStyles}
        enableHover={true}
        />
    )
}