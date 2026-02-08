import dishesData from "@/data/dishes.json";
import type { Dish } from "@/components/DishCard";

export function RestaurantJsonLd() {
  const dishes = dishesData as Dish[];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Grand Veggie",
    description:
      "Premium clean-food restaurant with organic sourcing, farm-to-table menus, and chef-curated seasonal dishes.",
    servesCuisine: ["Organic", "Vegan", "Seasonal"],
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Orchard Lane",
      addressLocality: "Green District",
      addressRegion: "",
      postalCode: "",
      addressCountry: "",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "11:00",
        closes: "22:00",
      },
    ],
    hasMenu: {
      "@type": "Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Featured Dishes",
          hasMenuItem: dishes.slice(0, 8).map((d) => ({
            "@type": "MenuItem",
            name: d.name,
            description: d.description,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: d.price,
              availability: "https://schema.org/InStock",
            },
            image: d.image,
          })),
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
