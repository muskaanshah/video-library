import { useEffect } from "react";
import { useTheme } from "../../context";
import "./alert.css";

function Alert() {
    const {
        alertState: { alertType, active, alertMsg },
        alertDispatch,
    } = useTheme();
    let alertClass = "";
    let spanClass = "info";

    if (alertType === "success") {
        alertClass = "alert-success";
        spanClass = "check_circle";
    }
    if (alertType === "warning") {
        alertClass = "alert-warning";
        spanClass = "warning";
    }
    if (alertType === "error") {
        alertClass = "alert-error";
        spanClass = "error";
    }

    useEffect(() => {
        if (active) {
            setTimeout(() => {
                alertDispatch({ type: "DEACTIVATE_ALERT" });
            }, 2000);
        }
    }, [active, alertDispatch]);
    return (
        <>
            {active && (
                <div className={`alert borderradius-0-5 ${alertClass}`}>
                    <span className="material-icons">{spanClass}</span>
                    {alertMsg}
                </div>
            )}
        </>
    );
}

export { Alert };
