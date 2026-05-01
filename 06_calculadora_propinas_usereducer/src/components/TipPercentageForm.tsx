import type { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
    {
        id: "tip-10",
        value: 0.1,
        label: "10%",
    },
    {
        id: "tip-20",
        value: 0.2,
        label: "20%",
    },
    {
        id: "tip-50",
        value: 0.5,
        label: "50%",
    },
];

type TipPercentageFormProps = {
    dispatch: Dispatch<OrderActions>;
    tip: number;
};

export default function TipPercentageForm({
    dispatch,
    tip,
}: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            <form>
                {tipOptions.map((tipOption) => (
                    <div key={tipOption.id} className="flex gap-2">
                        <input
                            className="cursor-pointer"
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={(e) =>
                                dispatch({
                                    type: "add-tip",
                                    payload: { value: +e.target.value },
                                })
                            }
                            checked={tipOption.value === tip}
                        />
                        <label
                            className="cursor-pointer"
                            htmlFor={tipOption.id}
                        >
                            {tipOption.label}
                        </label>
                    </div>
                ))}
            </form>
        </div>
    );
}
