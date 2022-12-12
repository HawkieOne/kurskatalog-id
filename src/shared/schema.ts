import { JSONSchemaType } from "ajv";
import { BuildingBlock, Course } from "./interfaces";

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
            items: { $ref: "buildSchema.json" },
          },
        },
      },
    },
    // required: ["name", "years"],
    additionalProperties: false,
  },
};

export const buildingBlockSchema: JSONSchemaType<BuildingBlock> = {
  $id: "http://schema.com/schemas/buildSchema.json",
  type: "object",
  properties: {
    x: { type: "integer" },
    y: { type: "integer" },
    w: { type: "integer" },
    h: { type: "integer" },
    i: { type: "string" },
    content: { $ref: "cSchema.json" },
    isResizable: {type: "boolean", nullable: true}
  },
  required: ["x", "y", "w", "h", "i", "content"],
};

export const courseSchema: JSONSchemaType<Course> = {
  $id: "http://schema.com/schemas/cSchema.json",
  type: "object",
  properties: {
    name: { type: "string" },
    points: { type: "number" },
    link: { type: "string" },
    level: { type: "string" },
    code: { type: "string" },
    rating: { type: "number" },
    description: { type: "string", nullable: true },
    prerequisite: { type: "string", nullable: true },
    pace: { type: "number", nullable: true },
    period: { type: "string", nullable: true },
    year: { type: "number", nullable: true },
    startDate: { type: "string", nullable: true },
    endDate: { type: "string", nullable: true },
    location: { type: "string", nullable: true },
    registerCode: { type: "string", nullable: true },
    group: { type: "string", nullable: true }
  },
  required: [
    "name",
    "points",
    "link",
    "level",
    "code",
    "rating",
  ],
};