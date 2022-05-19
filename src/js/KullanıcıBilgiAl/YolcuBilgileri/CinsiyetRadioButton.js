const CinsiyetRadioButton = (props) => {
  return (
    <div>
      <form>
        <input type="radio" id="erkek" name="cinsiyet" value="erkek" />
        <label htmlFor="erkek">Erkek</label>
        <br/>
        <input type="radio" id="kadın" name="cinsiyet" value="kadın" />
        <label htmlFor="kadın">Kadın</label>
      </form>
    </div>
  );
};
export default CinsiyetRadioButton;
