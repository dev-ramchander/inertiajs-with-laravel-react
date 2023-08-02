import { useEffect, useState } from "react";

function Footer() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const inerval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(inerval);
        }
    }, []);
    return (
        <>
            <hr />
            <section className="text-center">
                <strong>
                    <p>{date.toString()} | &copy; Copyright {(new Date().getFullYear())}</p>
                </strong>
            </section>
        </>
    )
}
export default Footer;