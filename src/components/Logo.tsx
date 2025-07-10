import Image from "next/image";

export default function Logo({
  width = 180,
  height = 38,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src="/logos/logo-queryve.svg"
      alt="Queryve Logo"
      width={width}
      height={height}
    />
  );
}
