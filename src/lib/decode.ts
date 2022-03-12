export const decodeAsText = (arrayBuffer: BufferSource, encoding: string) =>
  new TextDecoder(encoding).decode(arrayBuffer);
