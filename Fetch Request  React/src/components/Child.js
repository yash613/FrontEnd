const Child = (props) => {
    return (
        <table style={{border: '1px black solid'}}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>userId</th>
                    <th>body</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
            {
                props.data.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.body}</td>
                        <td>{item.title}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default Child;