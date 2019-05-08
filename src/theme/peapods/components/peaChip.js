import Color from 'color';

export default ({ shape, palette: { primary, secondary, common } }) => ({
  MuiChip: {
    root: {
      '&.PeaTag-root': {
        height: 40,
        padding: '4px 8px',
        borderRadius: shape.borderRadius,
        '& .MuiChip-label': {
          fontSize: 14,
          fontWeight: 500,
        },
      },
    },
    clickable: {
      '&:hover': {
        '& .MuiChip-label': {
          color: common.white,
        },
      },
    },
    colorPrimary: {
      backgroundColor: Color(primary.main)
        .fade(0.75)
        .string(),
      '& .MuiChip-label': {
        color: primary.dark,
      },
    },
    colorSecondary: {
      backgroundColor: Color(secondary.main)
        .fade(0.75)
        .string(),
      '& .MuiChip-label': {
        color: secondary.dark,
      },
    },
  },
});
