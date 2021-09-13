import '../../components' // type definitions for type checks and intelliSense
import { Component, Element, h, Host, Listen, State } from '@stencil/core'
import { getClassNames } from '../../utils/getClassNames'

/**
 * @virtualProp ref - reference to component
 * @virtualProp {string | number} key - for tracking the node's identity when working with lists
 */
@Component({
  tag: 'ld-tablist',
  styleUrl: 'ld-tablist.css',
  shadow: false,
})
export class LdTablist {
  @Element() el: HTMLElement

  private slotContainerRef!: HTMLElement
  private btnScrollLeftRef!: HTMLButtonElement
  // private btnScrollRightRef!: HTMLButtonElement

  @State() scrollable: boolean
  @State() scrollLeftEnabled: boolean
  @State() scrollRightEnabled: boolean

  @Listen('resize', { target: 'window', passive: true })
  handleWindowResize() {
    this.updateScrollable()
    this.updateScrollButtons()
  }

  private updateScrollable() {
    const scrollButtonsWidth =
      2 * parseFloat(window.getComputedStyle(this.btnScrollLeftRef).width)
    const scrollContainerWidth = this.slotContainerRef.getBoundingClientRect()
      .width
    const contentWidth = Array.from(this.slotContainerRef.children)
      .map((child) => child.getBoundingClientRect().width)
      .reduce((a, b) => a + b)
    this.scrollable =
      scrollContainerWidth + (this.scrollable ? scrollButtonsWidth : 0) <
      contentWidth
  }

  private updateScrollButtons() {
    if (!this.scrollable) return
    this.scrollLeftEnabled = this.slotContainerRef.scrollLeft > 0
    this.scrollRightEnabled =
      this.slotContainerRef.scrollLeft +
        this.slotContainerRef.getBoundingClientRect().width -
        this.slotContainerRef.scrollWidth <
      0
  }

  private scroll(dir: 'left' | 'right') {
    this.slotContainerRef.scrollTo({
      left:
        this.slotContainerRef.scrollLeft +
        ((dir === 'left' ? -1 : 1) *
          this.slotContainerRef.getBoundingClientRect().width) /
          2,
      behavior: 'smooth',
    })
  }

  private focusTab(prevTab: HTMLElement, dir: 'left' | 'right') {
    const prevLdTab = prevTab.closest('ld-tab')
    const currentTab = prevLdTab[
      dir === 'left' ? 'previousElementSibling' : 'nextElementSibling'
    ]?.querySelector('[role="tab"]') as HTMLButtonElement
    if (currentTab) {
      currentTab.focus({ preventScroll: true })
      currentTab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }

  private setFocusOnSelectedTabpanel() {
    ;(this.el
      .closest('ld-tabs')
      .querySelector(
        'ld-tabpanel:not([hidden]) > [role="tabpanel"]'
      ) as HTMLElement)?.focus()
  }

  private onKeydown(ev) {
    switch (ev.key) {
      case 'ArrowLeft':
        ev.preventDefault()
        this.focusTab(ev.target, 'left')
        return
      case 'ArrowRight': {
        ev.preventDefault()
        this.focusTab(ev.target, 'right')
        return
      }
      case 'ArrowDown': {
        ev.preventDefault()
        this.setFocusOnSelectedTabpanel()
        return
      }
    }
  }

  componentDidLoad() {
    setTimeout(() => {
      this.updateScrollable()
      this.updateScrollButtons()
    })
  }

  render() {
    return (
      <Host
        onKeydown={this.onKeydown.bind(this)}
        class={getClassNames([
          'ld-tablist',
          this.scrollable && 'ld-tablist--scrollable',
        ])}
        role="tablist"
      >
        <button
          onClick={this.scroll.bind(this, 'left')}
          ref={(el) => (this.btnScrollLeftRef = el as HTMLButtonElement)}
          aria-disabled={this.scrollLeftEnabled ? undefined : 'true'}
          class="ld-tablist__btn-scroll ld-tablist__btn-scroll--left"
          tabindex="-1"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Scroll left</title>
            <path
              d="M10 13L6 8L10 3"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          class="ld-tablist__scroll-container"
          ref={(el) => (this.slotContainerRef = el as HTMLElement)}
          onScroll={this.updateScrollButtons.bind(this)}
        >
          <slot></slot>
        </div>
        <button
          onClick={this.scroll.bind(this, 'right')}
          aria-disabled={this.scrollRightEnabled ? undefined : 'true'}
          class="ld-tablist__btn-scroll ld-tablist__btn-scroll--right"
          tabindex="-1"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Scroll right</title>
            <path
              d="M6 13L10 8L6 3"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Host>
    )
  }
}
