import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/5a22101d-8b71-43be-b459-9c98d26f737f.jpg",
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/017af857-feda-464b-b0b1-5e22f35329cb.jpg",
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/7dea8236-9b17-4bcd-bd7e-2bf5a605bf8d.jpg",
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/5a22101d-8b71-43be-b459-9c98d26f737f.jpg",
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/017af857-feda-464b-b0b1-5e22f35329cb.jpg",
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/7dea8236-9b17-4bcd-bd7e-2bf5a605bf8d.jpg",
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/5a22101d-8b71-43be-b459-9c98d26f737f.jpg",
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/017af857-feda-464b-b0b1-5e22f35329cb.jpg",
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/7dea8236-9b17-4bcd-bd7e-2bf5a605bf8d.jpg",
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/5a22101d-8b71-43be-b459-9c98d26f737f.jpg",
    "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/files/017af857-feda-464b-b0b1-5e22f35329cb.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;