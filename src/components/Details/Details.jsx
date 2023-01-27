import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { ArcElement } from 'chart.js';
import Chart from 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
import useStyles from "./styles";

Chart.register(ArcElement);

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    //   <Card className= {classes.income}>
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent className={classes.card}>
        <Typography variant="h5">₹{total}</Typography>
        <Pie data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
