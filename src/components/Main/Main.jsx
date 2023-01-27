import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import { ExpenseGuardContext } from "../../context/context";

import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import InfoCard from "../InfoCard";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseGuardContext);

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Expense Guard"
        subheader="Track Expenses Smoothly"
        // subheader="Know Your Budget"
      />

      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ₹{balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          <InfoCard/>
          {/* Example: Add income of ₹100 in category Salary for Monday */}
        </Typography>

        <Divider className={classes.divider} />
        <Form />
      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
