import { cond, equals } from "ramda";
import { format, formatISO, add, sub } from "date-fns";

let test = async () => {
    const nextChargeDate = (date: number, amount: number) =>
    cond([
        [equals("month"), () => add(date, { months: amount })],
        [equals("day"), () => add(date, { days: amount })]
    ]);

    const subDateOffset = (date: number, amount: number) =>
    cond([
        [equals("month"), () => sub(date, { months: amount })],
        [equals("day"), () => sub(date, { days: amount })]
    ]);

    const now = Date.now();
    let nextChargeDateR = nextChargeDate(now, 1)("month");
    console.log("nextChargeDateR => ", nextChargeDateR);

    let subDateOffsetR = subDateOffset(nextChargeDateR, 10)("day");
    console.log("subDateOffsetR => ", subDateOffsetR);

    let formatR = format(subDateOffsetR, "yyyy-MM-dd");
    console.log("formatR => ", formatR);
}

test();