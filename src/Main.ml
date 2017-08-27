open Tea.App
open Tea.Html

type msg =
  | Increment
  | Set of int
  [@@bs.deriving {accessors}]

let init () = 4

let update model = function 
  | Increment -> model + 1
  | Set i -> i

let view_button title msg =
  button
    [ onClick msg
    ]
    [ text title
    ]

let view model =
  let bug foo =
    print_endline (string_of_int model);
    Set (int_of_string foo)
  in
  div
    []
    [ span
        [ style "text-weight" "bold" ]
        [ text (string_of_int model) ]
    ; br []
    ; view_button "Increment" Increment
    ; input' [onChange ~key:(model |> string_of_int) bug] []
    ]

let main =
  beginnerProgram { 
    model = init (); 
    update;
    view;
  }