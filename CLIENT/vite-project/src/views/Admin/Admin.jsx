import AddProduct from "../../components/admin/AddProduct";

export default function Admin({ user }) {
    return (
        <>
            <h1>aca va el admin</h1>
            <AddProduct user={user} />
        </>
    )
}