export const presetSchema = {
  $id: "http://schema.com/schemas/presetSchema.json",
  type: "object",
  properties: {
    name: { type: "string" },
    years: {
      type: "array",
      items: {
        type: "object",
        properties: {
          year: { type: "number" },
          courses: {
            type: "array",
            items: { $ref: "defsSchema.json#/definitions/buildingBlock" },
          },
        },
      },
    },
    // required: ["name", "years"],
    additionalProperties: false,
  },
};

export const buildingBlockSchema = {
  $id: "http://schema.com/schemas/buildSchema.json",
  type: "object",
  properties: {
    x: { type: "integer" },
    y: { type: "integer" },
    w: { type: "integer" },
    h: { type: "integer" },
    i: { type: "string" },
    moved: { type: "boolean"},
    static: { type: "boolean"},
    content: { $ref: "cSchema.json" },
  },
  required: ["x", "y", "w", "h", "i", "content"],
};

export const courseSchema = {
  id: "http://schema.com/schemas/cSchema.json",
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    prerequisite: { type: "string" },
    points: { type: "number" },
    link: { type: "string" },
    level: { type: "string" },
    code: { type: "string" },
    rating: { type: "number" },
    pace: { type: "number" },
    period: { type: "string" },
    year: { type: "number" },
    startDate: { type: "string" },
    endDate: { type: "string" },
    location: { type: "string" },
    registerCode: { type: "string" },
  },
  required: [
    "name",
    "description",
    "prerequisite",
    "points",
    "link",
    "level",
    "code",
    "rating",
  ],
  additionalProperties: false,
};

export const defsSchema = {
  $id: "http://schema.com/schemas/defsSchema.json",
  definitions: {
    buildingBlock: {
      type: "object",
      properties: {
        x: { type: "integer" },
        y: { type: "integer" },
        w: { type: "integer" },
        h: { type: "integer" },
        i: { type: "string" },
        content: { $ref: "defsSchema.json#/definitions/course" },
      },
      required: ["x", "y", "w", "h", "i", "content"],
    },
    course: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        prerequisite: { type: "string" },
        points: { type: "number" },
        link: { type: "string" },
        level: { type: "string" },
        code: { type: "string" },
        rating: { type: "number" },
        pace: { type: "number" },
        period: { type: "string" },
        year: { type: "number" },
        startDate: { type: "string" },
        endData: { type: "string" },
        location: { type: "string" },
        registerCode: { type: "string" },
      },
      required: [
        "name",
        "description",
        "prerequisite",
        "points",
        "link",
        "level",
        "code",
        "rating",
      ],
    },
  },
};
