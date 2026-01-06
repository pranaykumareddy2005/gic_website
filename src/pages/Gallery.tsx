import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Image, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    caption: "Inaugural Ceremony",
    category: "ceremony"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    caption: "Keynote Session",
    category: "talks"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop",
    caption: "Panel Discussion",
    category: "talks"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=800&h=600&fit=crop",
    caption: "Startup Expo",
    category: "expo"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    caption: "Innovation Challenge",
    category: "competition"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
    caption: "Networking Session",
    category: "networking"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    caption: "Workshop in Progress",
    category: "workshop"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    caption: "Student Presentations",
    category: "competition"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    caption: "Award Ceremony",
    category: "ceremony"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop",
    caption: "Team Collaboration",
    category: "workshop"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
    caption: "Tech Exhibition",
    category: "expo"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    caption: "Mentoring Session",
    category: "networking"
  }
];

const categories = [
  { id: "all", label: "All" },
  { id: "ceremony", label: "Ceremonies" },
  { id: "talks", label: "Talks" },
  { id: "expo", label: "Expo" },
  { id: "competition", label: "Competition" },
  { id: "workshop", label: "Workshop" },
  { id: "networking", label: "Networking" }
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const currentIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage)
    : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id);
    }
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <>
      <Helmet>
        <title>Gallery - GIC 2026</title>
        <meta name="description" content="Browse photos and highlights from Global Innovators Conclave events. Relive the moments of innovation and collaboration." />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="bg-hero-gradient py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                <Image className="w-3 h-3 mr-1" />
                Event Gallery
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Event <span className="text-gradient-blue">Gallery</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Capturing moments of innovation, collaboration, and success from past events.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={filter === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(cat.id)}
                  className="rounded-full"
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <div 
                  key={image.id}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <Camera className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">No photos in this category yet.</p>
              </div>
            )}

            {/* Coming Soon Note */}
            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">GIC 2026 Gallery Coming Soon</h3>
              <p className="text-sm text-muted-foreground">
                Photos from GIC 2026 will be uploaded here after the event. Stay tuned!
              </p>
            </div>
          </div>
        </section>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
            <div className="relative">
              {selectedImageData && (
                <img 
                  src={selectedImageData.src.replace('w=800', 'w=1200')} 
                  alt={selectedImageData.caption}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
              
              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={goToPrevious}
                disabled={currentIndex <= 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={goToNext}
                disabled={currentIndex >= filteredImages.length - 1}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Caption */}
              {selectedImageData && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-center">{selectedImageData.caption}</p>
                </div>
              )}

              {/* Close */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </Layout>
    </>
  );
};

export default Gallery;
