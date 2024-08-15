export type Formatter = "biome" | "prettier";

export interface Options {
  /**
   * Should the plugin generate TypeScript types for the icon names
   * @default false
   */
  withTypes?: boolean;
  /**
   * The path to the icon directory
   * @example "./icons"
   */
  inputDir: string;
  /**
   * Output path for the generated
   * @example "./public/icons"
   */
  outputDir: string;
  /**
   * Output path for the generated type file
   * @example "./app/types.ts"
   */
  typesOutputFile?: string;
  /**
   * The name of the generated spritesheet
   * @default sprite.svg
   * @example "icon.svg"
   */
  fileName?: string;
  /**
   * What formatter to use to format the generated files. Can be "biome" or "prettier"
   * @default no formatter
   * @example "biome"
   */
  formatter?: Formatter;
  /**
   * The path to the formatter config file
   * @default no path
   * @example "./biome.json"
   */
  pathToFormatterConfig?: string;
  /**
   * The cwd, defaults to process.cwd()
   * @default process.cwd()
   */
  cwd?: string;
  /**
   * Callback function that is called when the script is generating the icon name
   * This is useful if you want to modify the icon name before it is written to the file
   * @example (iconName) => iconName.replace("potato", "mash-em,boil-em,put-em-in-a-stew")
   */
  iconNameTransformer?: (fileName: string) => string;
}
