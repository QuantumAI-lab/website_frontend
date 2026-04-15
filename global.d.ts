// Forces TypeScript to accept CSS imports
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}