// Prefixo de caminho usado quando o site é publicado em uma subpasta (ex.: GitHub Pages).
// Em produção na raiz do domínio, basePath fica vazio e o comportamento não muda.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string) {
  if (!path.startsWith('/')) return path;
  return `${basePath}${path}`;
}
