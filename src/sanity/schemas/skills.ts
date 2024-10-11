import { defineField, defineType } from "sanity";

export default defineType({
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => [
        Rule.required(), 
        Rule.min(2), 
        Rule.max(50)
      ],
    }),
    defineField({
      name: 'value',
      type: 'number',
      title: 'Percentage',
      validation: (Rule) => [
        Rule.required(), 
        Rule.min(1).error('min value must be 1'),
        Rule.max(100).error('max value must be 100'),
      ],
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      initialValue: 'frontend',
      options: {
        list: [
          { title: 'Front End', value: 'frontend'},
          { title: 'Back End', value: 'backend'},
          { title: 'Tools', value: 'tools'},
          { title: 'Has a Knowledge', value: 'knowledge'},
        ],
      },
      validation: (Rule) => [
        Rule.required(),
      ]
    })
  ]
});