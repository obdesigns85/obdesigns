export interface TourScene {
  id: string;
  title: string;
  image: string;
}

// Swap the image path here once a real project panorama is taken —
// nothing else needs to change. Add more entries as more scenes come in.
export const tourScenes: TourScene[] = [
  { id: "scene-1", title: "Sample Room", image: "/images/ob/tour-1.jpg" },
];
