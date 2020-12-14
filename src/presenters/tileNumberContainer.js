function TileNumberContainer(nr) {
  const TileNumber = (nr) => {
    return (
      <p>{'${nr}'}</p>
    )
  }

  return <TileNumber/>;
}
export default TileNumberContainer;