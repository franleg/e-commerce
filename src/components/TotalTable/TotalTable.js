import { useCartContext } from "../../context/CartContext";
import "./TotalTable.css";
import Table from "react-bootstrap/Table";

function TotalTable() {
    const {totalPurchase} = useCartContext()

    return (
        <>
            <Table className="total-table">
                <tbody>
                    <tr>
                        <th>Envío</th>
                        <td>
                            <span>Envío Gratuito</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Impuesto</th>
                        <td>
                            <span>$0</span>
                        </td>
                    </tr>
                    <tr>
                        <th>TOTAL</th>
                        <td>
                            <span>${totalPurchase()}</span>
                        </td>
                    </tr>
                </tbody>
            </Table> 
        </>
    )
}

export default TotalTable
