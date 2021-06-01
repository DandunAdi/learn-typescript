import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(private ulContainer: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = heading;
    const p = document.createElement("p");
    p.innerText = item.format();

    li.append(h4);
    li.append(p);

    if (pos === "start") {
      this.ulContainer.prepend(li);
    } else {
      this.ulContainer.append(li);
    }
  }
}
