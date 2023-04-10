function Component(props) {
    let {id, name, status, species, gender, pic} = props;

    let classNameItem = `card`;
    return (
      <div className={classNameItem} >
          <ul>
        <h3>id - {id}</h3>
        <h3>name - {name}</h3>
        <h3>status - {status}</h3>
        <h3>species - {species}</h3>
        <h3>gender - {gender}</h3>
        <img src={pic}/>
          </ul>
      </div>)

}

export default Component;