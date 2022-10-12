import { css } from 'lit';

export const todoAppStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .header {
    text-transform: uppercase;
    font-size: 2vw;
    font-family: poppins;
    width: max-content;
    background-color: #0eb0e2;
    padding: 1rem 2.5rem;
    margin: 0 auto;
    color: #003748;
    border-radius: 8px;
  }
  .add {
    font-size: 5vw;
    font-weight: bolder;
    height: 5vw;
    width: 5vw;
    background-color: #0eb0e2;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    bottom: 3vw;
    right: 5vw;
    transition: all 0.3s;
  }
  .close {
    transform: rotate(45deg);
  }
  .modal {
    position: fixed;
    inset: calc(100% - 8vw) 5vw 3vw calc(100% - 10vw);
    transition: all 0.3s;
    border-radius: 50%;
  }

  .open-modal {
    inset: 0;
    height: unset;
    width: unset;
    background-color: #003748;
    opacity: 0.9;
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-form {
    border: 1px solid #0eb0e2;
    border-radius: 0.5rem;
    display: none;
    padding: 5rem 3rem;
    gap: 3rem;
    flex-direction: column;
    font-size: 1.4rem;
  }
  .input-form * {
    display: block;
  }
  .d-flex {
    display: flex;
  }
  .tasks-container {
    background-color: #003748;
    padding: 3rem 4rem 5rem;
    border-radius: 8px;
    width: max-content;
    margin: 3rem auto 1rem;
    min-width: 50vw;

    max-width: 80vw;
  }
  .task-wrapper {
    border-radius: 3rem 0 0 0;
    transform: translateY(1rem);
    padding: 2rem 3rem;
    box-shadow: 0rem -0.5rem 1rem #0005;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    position: relative;
    font-size: 1.3rem;
  }
  .task-wrapper::after {
    background-color: inherit;
    content: '';
    top: 99%;
    left: 0;
    right: 0;
    position: absolute;
    height: 3rem;
    border-bottom-right-radius: 3rem;
  }
  .task-wrapper:last-of-type {
    padding-bottom: 2rem;
    border-bottom-right-radius: 3rem;
  }
  .task-wrapper:last-of-type::after {
    height: 0;
  }
  input,
  textarea {
    width: 100%;
    padding: 1rem;
    margin-top: 0.5rem;
    outline: none;
    font-size: 1.2rem;
    border-radius: 4px;
    border: none;
  }
  textarea {
    min-height: 7em;
  }
  button {
    padding: 1rem;
    text-transform: capitalize;
    font-size: 1.2rem;
    border: none;
    border-radius: 4px;
    outline: none;
  }
  button:hover {
    background-color: #0eb0e2;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    .tasks-container {
      width: 100%;
      min-width: unset;
      max-width: unset;
      padding: 1rem 2rem 3rem;
    }
    .task-wrapper {
      padding: 1rem;
      border-radius: 2rem 0 0;
    }
    .task-wrapper:last-of-type {
      padding-bottom: 1rem;
      border-bottom-right-radius: 2rem;
    }
  }
`;
