import AddProduct from "../../components/admin/AddProduct";

export default function Admin(data) {
    const { user } = data;
    return (
        <>
            <h1>Aca va el admin</h1>
            <AddProduct user={user} />
        </>
    )
}