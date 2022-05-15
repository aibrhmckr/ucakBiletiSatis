const CinsiyetRadioButton = () => {
  return (
    <div>
      <form>
        <input type="radio" id="erkek" name="cinsiyet" value="erkek" />
        <label for="erkek">Erkek</label>
        <input type="radio" id="kadın" name="cinsiyet" value="kadın" />
        <label for="kadın">Kadın</label>
      </form>
    </div>
  );
};
export default CinsiyetRadioButton;
