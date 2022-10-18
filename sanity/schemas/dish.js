export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      tilte: "Name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      tilte: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      tilte: "Price of Dish in CAD",
    },
    {
      name: "image",
      type: "image",
      tilte: "Image of the dish",
    },
  ],
}
