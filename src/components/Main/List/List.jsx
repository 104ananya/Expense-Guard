import React, {useContext} from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import { ExpenseGuardContext } from "../../../context/context";
import useStyles from "./styles";


const List = () => {
  const classes = useStyles();

  const {deleteTransaction, transactions} = useContext(ExpenseGuardContext);
  // console.log(globalState);

  // here putting inside the { } means destructuring the value instead of using whole 

  // const transactions = [
  //   {
  //     id: 1,
  //     type: "Income",
  //     category: "Salary",
  //     amount: 50,
  //     date: "Wed Jan 25 2023",
  //   },
  //   {
  //     id: 2,
  //     type: "Expense",
  //     category: "Pets",
  //     amount: 50,
  //     date: "Wed Jan 25 2023",
  //   },
  //   {
  //     id: 2,
  //     type: "Expense",
  //     category: "Pets",
  //     amount: 50,
  //     date: "Wed Jan 25 2023",
  //   },
  //   {
  //     id: 2,
  //     type: "Expense",
  //     category: "Pets",
  //     amount: 50,
  //     date: "Wed Jan 25 2023",
  //   },
    
    
  // ];

  return (
    <MUIList dense={false} classname={classes.list}>
      {transactions.map((transactions) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transactions.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transactions.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={transactions.category}
              secondary={`₹${transactions.amount} - ${transactions.date}`}
            />

            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transactions.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
