import { Appbar } from "../components/Appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
    </div>
}