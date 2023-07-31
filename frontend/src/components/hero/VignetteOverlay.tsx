import { Box, Typography } from "@mui/material";

export default function VignetteOverlay() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "100",
        background:
          "radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.7))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
        }}
      >
        СОВЕТ
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
        }}
      >
        МОЛОДЫХ УЧЕНЫХ
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
        }}
      >
        Уфимского Университета Науки и Технологий
      </Typography>
    </Box>
  );
}
