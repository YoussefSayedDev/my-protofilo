import { defineField, defineType } from "sanity";

export default defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => [
        Rule.required(),
        Rule.min(5).error('A title of min: must be 5 characters at least.'),
        Rule.max(100).error('A title of max: must be less than 100 characters.'),
      ],
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => [
        Rule.required(),
        Rule.min(10).error('A decription of min: must be 10 characters at least.'),
        Rule.max(10000).error('A title of max: must be less than 10,000 characters.')
      ],
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'demoLink',
      type: 'url',
      title: "Demo Link"
    }),
    defineField({
      name: 'githubLink',
      type: 'url',
      title: 'Github Repository Link',
    }),
    defineField({
      name: 'publishedAt',
      type: 'date',
      title: 'Published At',
      validation: (Rule) => [
        Rule.min(new Date("2022-11-20").toDateString()),
        Rule.max(new Date().toDateString()),
      ]
    }),
    defineField({
      name: 'isResponsive',
      type: 'boolean',
      title: 'Is Reaponsive',
      initialValue: true,
    }),
  ]
})