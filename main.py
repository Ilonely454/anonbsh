import tkinter as tk
import random

def on_yes_click():
    label.config(text="ХаХаХа")

def on_no_click(event=None):
    # Переместить кнопку "Нет" в случайное место на экране
    new_x = random.randint(0, window.winfo_width() - no_button.winfo_width())
    new_y = random.randint(0, window.winfo_height() - no_button.winfo_height())
    no_button.place(x=new_x, y=new_y)

# Создаем основное окно
window = tk.Tk()
window.title("Кушал гири?")
window.geometry("400x400")

# Создаем метку с текстом
label = tk.Label(window, text="Сосал?", font=("Arial", 16))
label.pack(pady=20)

# Создаем кнопки
yes_button = tk.Button(window, text="Да", command=on_yes_click, font=("Arial", 14))
yes_button.pack(side="left", padx=40)

no_button = tk.Button(window, text="Нет", font=("Arial", 14))
no_button.place(x=200, y=200)  # Начальное расположение
no_button.bind("<Enter>", on_no_click)  # Реакция на наведение мыши

# Запускаем цикл обработки событий
window.mainloop()
