import { string_to_unicode_variant } from "string-to-unicode-variant";
import {
  GroupType,
  InlineGroup,
  ListGroup,
  QuillDeltaToHtmlConverter,
} from "quill-delta-to-html";
import { ListItem } from "quill-delta-to-html/src/grouper/group-types.ts";
import { TDataGroup } from "quill-delta-to-html/dist/commonjs/grouper/group-types";

export const withCombinedAttributes = (op: any) => {
  const combinedAllowed = new Set(["underline", "strike"]);
  return (
    Object.keys(op.attributes)
      .filter((a) => combinedAllowed.has(a))
      .pop() ?? ""
  );
};
export const formatOpp = (op: any) => {
  let styledText = op.insert.value;
  if (op.attributes) {
    if (op.attributes.doubleStruck) {
      styledText = string_to_unicode_variant(
        styledText,
        "doublestruck",
        withCombinedAttributes(op),
      );
    } else if (op.attributes.negativeCircled) {
      styledText = string_to_unicode_variant(styledText, "circled negative");
    } else if (op.attributes.circled) {
      styledText = string_to_unicode_variant(styledText, "circled");
    } else if (op.attributes.negativeSquared) {
      styledText = string_to_unicode_variant(styledText, "squared negative");
    } else if (op.attributes.squared) {
      styledText = string_to_unicode_variant(styledText, "squared");
    } else if (op.attributes.scriptText && op.attributes.bold) {
      styledText = string_to_unicode_variant(
        styledText,
        "bold script",
        withCombinedAttributes(op),
      );
    } else if (op.attributes.scriptText) {
      styledText = string_to_unicode_variant(
        styledText,
        "script",
        withCombinedAttributes(op),
      );
    } else if (op.attributes.bold && op.attributes.italic) {
      styledText = string_to_unicode_variant(
        styledText,
        "bold italic",
        withCombinedAttributes(op),
      );
    } else if (op.attributes.bold) {
      styledText = string_to_unicode_variant(
        styledText,
        "bold",
        withCombinedAttributes(op),
      );
    } else if (op.attributes.italic) {
      styledText = string_to_unicode_variant(
        styledText,
        "italic",
        withCombinedAttributes(op),
      );
    }
  }
  styledText = styledText.replace(/\n/g, "<span></br></span>");
  return styledText;
};

export const convertDeltasToHtml = (deltas: any): string => {
  const converter = new QuillDeltaToHtmlConverter(deltas.ops);
  const formatListItems = (data: ListGroup): string => {
    return data.items
      .map((item: ListItem, index: number) => {
        const listType = item.item.op.attributes.list ?? "unordered";
        const lineText = item.item.ops.map(formatOpp).join("");
        return listType === "ordered"
          ? `<p>${index + 1} - ${lineText}</p>`
          : `<p>• ${lineText}</p>`;
      })
      .join("");
  };
  const formatInlineGroup = (data: InlineGroup): string => {
    return data.ops.map(formatOpp).join("");
  };
  converter.beforeRender((type: GroupType, data: TDataGroup) => {
    switch (type) {
      case GroupType.List:
        return formatListItems(data as ListGroup);
      case GroupType.InlineGroup:
        return formatInlineGroup(data as InlineGroup);
      default:
        return "";
    }
  });

  return converter.convert();
};
