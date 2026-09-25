import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import type { HistoryContent } from "@/constants/about/history";

export default function TurningPoint({ title, paragraphs }: HistoryContent["turningPoint"]) {
  return (
    <Stack spacing={3} sx={{ maxWidth: 820 }}>
      <SectionTitle title={title} />
      <Stack spacing={2}>
        {paragraphs.map((paragraph) => (
          <Typography key={paragraph} variant="body1" sx={{ color: "text.secondary" }}>
            {paragraph}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}
