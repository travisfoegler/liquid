import { Component, Element, h, Host, Method, Prop, Watch } from '@stencil/core'
import { cloneAttributes } from '../../utils/cloneAttributes'
import { getClassNames } from '../../utils/getClassNames'

/**
 * @virtualProp ref - reference to component
 * @virtualProp {string | number} key - for tracking the node's identity when working with lists
 * @part input - Actual input element
 */
@Component({
  tag: 'ld-checkbox',
  styleUrl: 'ld-checkbox.css',
  shadow: true,
})
export class LdCheckbox implements InnerFocusable {
  @Element() el: HTMLInputElement

  private input: HTMLInputElement
  private hiddenInput: HTMLInputElement

  /** Hint for form autofill feature. */
  @Prop({ mutable: true, reflect: true }) autocomplete?: string

  /** Automatically focus the form control when the page is loaded. */
  @Prop() autofocus?: boolean

  /** Indicates whether the checkbox is checked. */
  @Prop({ mutable: true, reflect: true }) checked: boolean

  /** Disabled state of the checkbox. */
  @Prop() disabled: boolean

  /** Associates the control with a form element. */
  @Prop() form?: string

  /**
   * Set this property to `true` to indicate that the checkbox's value is neither true nor false.
   * The prop is removed automatically as soon as the checkbox is clicked (if not disabled).
   */
  @Prop({ mutable: true }) indeterminate?: boolean

  /** Set this property to `true` in order to mark the checkbox visually as invalid. */
  @Prop() invalid: boolean

  /** Display mode. */
  @Prop() mode?: 'highlight' | 'danger'

  /** Used to specify the name of the control. */
  @Prop() name: string

  /** The value is not editable. */
  @Prop() readonly?: boolean

  /** Set this property to `true` in order to mark the checkbox as required. */
  @Prop() required: boolean

  /** Checkbox tone. Use `'dark'` on white backgrounds. Default is a light tone. */
  @Prop() tone: 'dark'

  /** The input value. */
  @Prop() value: string

  /**
   * Sets focus on the checkbox
   */
  @Method()
  async focusInner() {
    if (this.input !== undefined) {
      this.input.focus()
    }
  }

  @Watch('checked')
  updateIndeterminate() {
    this.indeterminate = undefined
  }

  @Watch('checked')
  @Watch('name')
  @Watch('value')
  updateHiddenInput() {
    const outerForm = this.el.closest('form')
    if (!this.hiddenInput && this.name && (outerForm || this.form)) {
      this.createHiddenInput()
    }

    if (this.hiddenInput) {
      if (!this.name) {
        this.hiddenInput.remove()
        this.hiddenInput = undefined
        return
      }

      this.hiddenInput.name = this.name
      this.hiddenInput.checked = this.checked

      if (this.value) {
        this.hiddenInput.value = this.value
      } else {
        this.hiddenInput.removeAttribute('value')
      }

      if (this.form) {
        this.hiddenInput.setAttribute('form', this.form)
      } else if (this.hiddenInput.getAttribute('form')) {
        if (outerForm) {
          this.hiddenInput.removeAttribute('form')
        } else {
          this.hiddenInput.remove()
          this.hiddenInput = undefined
        }
      }
    }
  }

  private createHiddenInput() {
    this.hiddenInput = document.createElement('input')
    this.hiddenInput.type = 'checkbox'
    this.hiddenInput.style.visibility = 'hidden'
    this.hiddenInput.style.position = 'absolute'
    this.hiddenInput.style.pointerEvents = 'none'
    this.el.appendChild(this.hiddenInput)
  }

  private handleBlur(ev) {
    setTimeout(() => {
      this.el.dispatchEvent(ev)
    })
  }

  private handleFocus = (ev: FocusEvent) => {
    setTimeout(() => {
      this.el.dispatchEvent(ev)
    })
  }

  private handleClick = (ev?: MouseEvent) => {
    if (this.disabled || this.el.getAttribute('aria-disabled') === 'true') {
      ev?.preventDefault()
      return
    }

    this.checked = !this.checked

    if (!ev.isTrusted) {
      // This happens, when a click event is dispatched on the host element
      // from the outside i.e. on click on a parent ld-label element.
      this.el.dispatchEvent(
        new Event('input', { bubbles: true, composed: true })
      )
    }
  }

  componentWillLoad() {
    const outerForm = this.el.closest('form')

    if (outerForm && !this.autocomplete) {
      this.autocomplete = outerForm.getAttribute('autocomplete')
    }

    if (this.name && (outerForm || this.form)) {
      this.createHiddenInput()
      this.hiddenInput.checked = this.checked
      this.hiddenInput.name = this.name

      if (this.form) {
        this.hiddenInput.setAttribute('form', this.form)
      }

      if (this.value) {
        this.hiddenInput.value = this.value
      }
    }
  }

  componentDidLoad() {
    if (this.autofocus) {
      this.focusInner()
    }
  }

  render() {
    const cl = [
      'ld-checkbox',
      this.mode && `ld-checkbox--${this.mode}`,
      this.tone && `ld-checkbox--${this.tone}`,
      this.invalid && 'ld-checkbox--invalid',
    ]

    return (
      <Host part="root" class={getClassNames(cl)} onClick={this.handleClick}>
        <input
          part="input focusable"
          onBlur={this.handleBlur.bind(this)}
          onFocus={this.handleFocus}
          ref={(ref) => (this.input = ref)}
          type="checkbox"
          {...cloneAttributes(this.el, ['autocomplete', 'tone', 'mode'])}
          disabled={this.disabled}
          checked={this.checked}
        />
        <svg
          class="ld-checkbox__check"
          part="check"
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L5.40795 10L2 6.63964"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="ld-checkbox__box" part="box"></div>
      </Host>
    )
  }
}