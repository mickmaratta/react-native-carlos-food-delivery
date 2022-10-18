export default {
    name: 'featured',
    title: 'Featured Menu Categories',
    type: 'document',
    fields: [
      {
        name: "name",
        type: "string",
        tilte: "Featured Category Name",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "short_description",
        type: "string",
        tilte: "Short description",
        validation: (Rule) => Rule.max(200),
      },
      {
        name: "restaurants",
        type: "array",
        tilte: "Restaurants",
        of: [{ type: "reference", to: [{ type: "restaurant"}] }]
      },
    ],
  }
  