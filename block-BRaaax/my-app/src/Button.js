function Button(props) {
  function getStyles() {
    let { type = 'primary', size = 'medium' } = props;
    return 'button button--${type} button--${size}';
  }
  return (
    <button
      onClick={props.onClickHandler}
      className={getStyles()}
      disabled={props.disabled}
    >
      {props.label || 'Button'}
    </button>
  );
}

export default Button;
