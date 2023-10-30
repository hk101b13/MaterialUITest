import { ThemeProvider, createTheme } from "@mui/material";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button as MButton } from "@mui/material";
import { useTranslation } from "react-i18next";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const MUI = () => {
  const { t } = useTranslation();
  return (
    <>
      <MButton
        sx={{
          margin: "10px",
          backgroundColor: "lightBlue",
          color: "white",
          "&:hover": {
            backgroundColor: "pink",
          },
        }}
      >
        {t("Click")}
      </MButton>
      <MButton color="primary" variant="contained" sx={{ marginRight: "10px" }}>
        {t("Click")}
      </MButton>
      <MButton color="secondary" variant="outlined">
        {t("Click")}
      </MButton>

      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "lightGray", maxWidth: "1000px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">{t("Calories")}</TableCell>
              <TableCell align="right">{t("Fat(g)")}</TableCell>
              <TableCell align="right">{t("Carbs(g)")}</TableCell>
              <TableCell align="right">{t("Protein(g)")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  background: "white",
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
