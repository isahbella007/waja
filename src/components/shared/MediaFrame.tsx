import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ImageContent } from "@/constants/types";

// Shows the image when a src is set, otherwise a labelled placeholder box
export default function MediaFrame({
  image,
  sizes,
  sx,
  placeholderColor,
  placeholderBg,
}: {
  image: ImageContent;
  sizes: string;
  sx?: SxProps<Theme>;
  placeholderColor?: string;
  placeholderBg?: string;
}) {
  return (
    <Box
      sx={[
        {
          position: "relative",
          overflow: "hidden",
          display: "grid",
          placeItems: "center",
          bgcolor: placeholderBg,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {image.src ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} style={{ objectFit: "cover" }} />
      ) : (
        <Typography variant="caption" sx={{ color: placeholderColor, textAlign: "center", px: 2 }}>
          {image.alt}
        </Typography>
      )}
    </Box>
  );
}
