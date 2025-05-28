import { defineDocumentType, makeSource } from "contentlayer2/source-files";

export const Manifesto = defineDocumentType(() => ({
  name: "Manifesto",
  filePathPattern: "manifesto.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the manifesto",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the manifesto",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: () => "/manifesto",
    },
  },
}));

export const Signal = defineDocumentType(() => ({
  name: "Signal",
  filePathPattern: "signals/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the signal",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the signal",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the signal",
      required: false,
    },
    image: {
      type: "string",
      description: "The featured image of the signal",
      required: false,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Tags for the signal",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc: any) =>
        `/signals/${doc._raw.flattenedPath.replace("signals/", "")}`,
    },
    slug: {
      type: "string",
      resolve: (doc: any) => doc._raw.flattenedPath.replace("signals/", ""),
    },
    published: {
      type: "boolean",
      resolve: () => true,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Manifesto, Signal],
  disableImportAliasWarning: true,
  onUnknownDocuments: "skip-warn",
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
