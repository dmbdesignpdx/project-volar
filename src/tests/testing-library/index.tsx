// Theirs
import { render } from "@testing-library/react";

// Ours
import { Provider } from "@/components/ui/provider";
import { PropsWithChildren } from "react";


type CustomParams = Parameters<typeof render>;
type CustomReturn = ReturnType<typeof render>;


function wrapper({ children }: PropsWithChildren) {
  return (
    <Provider>
      {children}
    </Provider>
  );
}

function customRender(...[ui, options]: CustomParams): CustomReturn {
  return render(ui, {
    wrapper,
    ...options,
  });
}


export * from "@testing-library/react";
export { customRender as render };
