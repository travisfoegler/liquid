import { Component, h, Host, Listen } from '@stencil/core';
import eventBus from '../../utils/eventBus';
import { SearchEventType } from '../../utils/eventTypes';

/** @internal **/
@Component({
  tag: 'docs-btn-search',
  styleUrl: 'docs-btn-search.css',
  shadow: false,
})
export class DocsBtnSearch {
  private btnSearch!: HTMLButtonElement;

  @Listen('click', { capture: true })
  handleClick() {
    eventBus.emit(SearchEventType.open);
  }

  @Listen('keydown', {
    target: 'document',
    passive: true,
  })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'S') {
      if (
        ['input', 'textarea'].includes(
          document.activeElement?.tagName.toLowerCase()
        )
      ) {
        return;
      }
      if (document.activeElement?.tagName === 'textarea') return;
      eventBus.emit(SearchEventType.open);
    }
  }

  private onSearchClose() {
    setTimeout(() => {
      this.btnSearch.focus();
    });
  }

  componentDidLoad() {
    eventBus.on(SearchEventType.close, this.onSearchClose.bind(this));
  }

  render() {
    return (
      <Host class="docs-btn-search">
        <button
          ref={(el) => (this.btnSearch = el as HTMLButtonElement)}
          class="docs-btn-search__btn"
        >
          <svg
            class="docs-btn-search__magnifier"
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
          >
            <circle cx="5.90909" cy="5.90909" r="4.90909" stroke-width="2" />
            <path
              d="M9.72729 9.72729L13 13"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Search
          <svg
            class="docs-btn-search__shortcut"
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 14C4.22386 14 4 13.7761 4 13.5V6.5C4 6.22386 4.22386 6 4.5 6H7.5C7.77614 6 8 6.22386 8 6.5V13.5C8 13.7761 7.77614 14 7.5 14H4.5Z"
            />
            <path d="M0.707482 9.1746L5.62037 3.4429C5.81992 3.21009 6.18008 3.21009 6.37963 3.4429L11.2925 9.1746C11.5705 9.49894 11.3401 10 10.9129 10H6H1.08711C0.659934 10 0.429479 9.49894 0.707482 9.1746Z" />
            <path d="M22.7301 5.873C22.6601 5.985 22.5854 6.069 22.5061 6.125C22.4314 6.181 22.3334 6.209 22.2121 6.209C22.1047 6.209 21.9881 6.17633 21.8621 6.111C21.7407 6.041 21.6007 5.964 21.4421 5.88C21.2881 5.796 21.1107 5.72133 20.9101 5.656C20.7094 5.586 20.4807 5.551 20.2241 5.551C19.7807 5.551 19.4494 5.64667 19.2301 5.838C19.0154 6.02467 18.9081 6.279 18.9081 6.601C18.9081 6.80633 18.9734 6.97667 19.1041 7.112C19.2347 7.24733 19.4051 7.364 19.6151 7.462C19.8297 7.56 20.0724 7.651 20.3431 7.735C20.6184 7.81433 20.8984 7.90533 21.1831 8.008C21.4677 8.106 21.7454 8.22267 22.0161 8.358C22.2914 8.49333 22.5341 8.666 22.7441 8.876C22.9587 9.086 23.1314 9.34267 23.2621 9.646C23.3927 9.94467 23.4581 10.3063 23.4581 10.731C23.4581 11.2023 23.3764 11.6433 23.2131 12.054C23.0497 12.4647 22.8117 12.824 22.4991 13.132C22.1911 13.4353 21.8084 13.6757 21.3511 13.853C20.8984 14.0257 20.3827 14.112 19.8041 14.112C19.4867 14.112 19.1624 14.0793 18.8311 14.014C18.5044 13.9487 18.1871 13.8577 17.8791 13.741C17.5711 13.6197 17.2817 13.4773 17.0111 13.314C16.7404 13.1507 16.5047 12.9687 16.3041 12.768L17.0041 11.662C17.0554 11.578 17.1277 11.5103 17.2211 11.459C17.3144 11.4077 17.4147 11.382 17.5221 11.382C17.6621 11.382 17.8021 11.4263 17.9421 11.515C18.0867 11.6037 18.2477 11.7017 18.4251 11.809C18.6071 11.9163 18.8147 12.0143 19.0481 12.103C19.2814 12.1917 19.5567 12.236 19.8741 12.236C20.3034 12.236 20.6371 12.1427 20.8751 11.956C21.1131 11.7647 21.2321 11.4637 21.2321 11.053C21.2321 10.815 21.1667 10.6213 21.0361 10.472C20.9054 10.3227 20.7327 10.199 20.5181 10.101C20.3081 10.003 20.0677 9.91667 19.7971 9.842C19.5264 9.76733 19.2487 9.68567 18.9641 9.597C18.6794 9.50367 18.4017 9.39167 18.1311 9.261C17.8604 9.12567 17.6177 8.95067 17.4031 8.736C17.1931 8.51667 17.0227 8.246 16.8921 7.924C16.7614 7.59733 16.6961 7.196 16.6961 6.72C16.6961 6.33733 16.7731 5.964 16.9271 5.6C17.0811 5.236 17.3074 4.91167 17.6061 4.627C17.9047 4.34233 18.2711 4.116 18.7051 3.948C19.1391 3.77533 19.6361 3.689 20.1961 3.689C20.5087 3.689 20.8121 3.71467 21.1061 3.766C21.4047 3.81267 21.6871 3.885 21.9531 3.983C22.2191 4.07633 22.4664 4.19067 22.6951 4.326C22.9284 4.45667 23.1361 4.606 23.3181 4.774L22.7301 5.873Z" />
          </svg>
        </button>
      </Host>
    );
  }
}
