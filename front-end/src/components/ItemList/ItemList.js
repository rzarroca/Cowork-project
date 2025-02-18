import './itemList.css';

export default function ItemList({ listData, checkInputAction, checkValues }) {
    const { name, data, type } = listData;

    function addPrice(name) {
        return name?.toLowerCase().includes('precio') ? 'priceItem' : '';
    }

    let renderedList;
    switch (type) {
        case 'standar':
            renderedList = (
                <ul className="list list-simple">
                    {data?.map((item) => (
                        <li key={item.nombre} className={addPrice(item.nombre)}>
                            {item.nombre}
                        </li>
                    ))}
                </ul>
            );
            break;

        case 'object':
            renderedList = (
                <ul className="list list-simple">
                    {Object.keys(data)?.map((key) => (
                        <li key={key} className={addPrice(key)}>
                            {`${key}: `}
                            {`${data[key]}`}
                        </li>
                    ))}
                </ul>
            );
            break;

        case 'checkbox':
            renderedList = (
                <form>
                    <ul className="list list-checked">
                        {data?.map((item) => (
                            <li key={item.nombre}>
                                <label
                                    htmlFor={item.id}
                                    className="list-checked-label"
                                >
                                    <input
                                        type="checkbox"
                                        id={item.id}
                                        name={item.nombre}
                                        onChange={() =>
                                            checkInputAction(item.id)
                                        }
                                        checked={
                                            checkValues
                                                ? checkValues[item.id]
                                                : false
                                        }
                                    />
                                    <span>{item.nombre}</span>
                                </label>
                                <span>
                                    <small>
                                        {item.precio}
                                        €/dia
                                    </small>
                                </span>
                            </li>
                        ))}
                    </ul>
                </form>
            );
            break;

        default:
            renderedList = (
                <ul className="list list-simple">
                    {data?.map((item) => (
                        <li key={item.nombre}>{item.nombre}</li>
                    ))}
                </ul>
            );
            break;
    }

    return (
        <section className="itemList">
            <h3>{name}</h3>
            {data?.length !== 0 ? (
                renderedList
            ) : (
                <div>La lista se encuentra vacía</div>
            )}
        </section>
    );
}
