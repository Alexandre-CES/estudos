#tutorial do https://www.youtube.com/@RfZorzi-RafaelSerafim

import tkinter as tk 
from tkinter import ttk

root = tk.Tk()

class Application():
    def __init__(self):
        self.root = root
        self.screen()
        self.frames()
        self.widgets_frame1()
        self.list_frame2()
        root.mainloop()
    
    #screen configs
    def screen(self):
        self.root.title('login')
        self.root.configure(background='#333355')
        self.root.resizable(True,True)
        self.root.geometry('700x500')
        self.root.maxsize(width=900, height=700)
        self.root.minsize(width=500, height=400)
    
    def frames(self):

        self.frame_1 = tk.Frame(self.root, bd=4, bg='#DFDFFF',
                                highlightbackground='#D0D0F0', highlightthickness=3)
        self.frame_1.place(relx=0.02,rely=0.02, relwidth=0.96,relheight=0.47) 
        #0 == 0%
        #1 == 100%
        #0.5 == 50%
        self.frame_2 = tk.Frame(self.root, bd=4, bg='#DFDFFF',
                                highlightbackground='#D0D0F0', highlightthickness=3)
        self.frame_2.place(relx=0.02,rely=0.51, relwidth=0.96,relheight=0.47) 

    def widgets_frame1(self):

        #botôes
        self.button_clear = tk.Button(self.frame_1, text='Clear', bd=2, bg='#9055DF', fg='white', 
                                      font=('verdana', 8,'bold'))
        self.button_clear.place(relx=0.2, rely=0.15, relwidth=0.1, relheight=0.1)
        
        self.button_search = tk.Button(self.frame_1, text='Search', bd=2, bg='#9055DF', fg='white', 
                                      font=('verdana', 8,'bold'))
        self.button_search.place(relx=0.3, rely=0.15, relwidth=0.1, relheight=0.1)
        
        self.button_new = tk.Button(self.frame_1, text='New', bd=2, bg='#9055DF', fg='white', 
                                      font=('verdana', 8,'bold'))
        self.button_new.place(relx=0.6, rely=0.15, relwidth=0.1, relheight=0.1)

        self.button_update = tk.Button(self.frame_1, text='Update', bd=2, bg='#9055DF', fg='white', 
                                      font=('verdana', 8,'bold'))
        self.button_update.place(relx=0.7, rely=0.15, relwidth=0.1, relheight=0.1)

        self.button_delete = tk.Button(self.frame_1, text='Delete', bd=2, bg='#9055DF', fg='white', 
                                      font=('verdana', 8,'bold'))
        self.button_delete.place(relx=0.8, rely=0.15, relwidth=0.1, relheight=0.1)

        #label
        self.label_code = tk.Label(self.frame_1, text='Code', bg='#DFDFFF', fg='#9055DF')
        self.label_code.place(relx=0.05, rely=0.05)

        self.code_entry = tk.Entry(self.frame_1, bg='#E9E0F0')
        self.code_entry.place(relx=0.05, rely=0.15, relwidth=0.08)

        self.label_name = tk.Label(self.frame_1, text='Name', bg='#DFDFFF', fg='#9055DF')
        self.label_name.place(relx=0.05, rely=0.3)

        self.name_entry = tk.Entry(self.frame_1, bg='#E9E0F0')
        self.name_entry.place(relx=0.05, rely=0.4, relwidth=0.9)

        self.label_name = tk.Label(self.frame_1, text='Phone', bg='#DFDFFF', fg='#9055DF')
        self.label_name.place(relx=0.05, rely=0.55)

        self.name_entry = tk.Entry(self.frame_1, bg='#E9E0F0')
        self.name_entry.place(relx=0.05, rely=0.65, relwidth=0.4)

        self.label_name = tk.Label(self.frame_1, text='City', bg='#DFDFFF', fg='#9055DF')
        self.label_name.place(relx=0.5, rely=0.55)

        self.name_entry = tk.Entry(self.frame_1, bg='#E9E0F0')
        self.name_entry.place(relx=0.5, rely=0.65, relwidth=0.45)

    def list_frame2(self):
        self.listCli = ttk.Treeview(self.frame_2, height=3, columns=('col1', 'col2', 'col3', 'col4'))
        self.listCli.heading('#0', text='')
        self.listCli.heading('#1', text='Code')
        self.listCli.heading('#2', text='Name')
        self.listCli.heading('#3', text='Phone')
        self.listCli.heading('#4', text='City')

        self.listCli.column('#0', width=1)
        self.listCli.column('#1', width=50)
        self.listCli.column('#2', width=200)
        self.listCli.column('#3', width=125)
        self.listCli.column('#3', width=125)

        self.listCli.place(relx=0.01, rely=0.01, relwidth=0.96, relheight=0.98)

        self.scrollList = tk.Scrollbar(self.frame_2, orient='vertical')
        self.listCli.configure(yscroll=self.scrollList.set)
        self.scrollList.place(relx=0.97, rely=0.01, relwidth=0.02, relheight=0.98)


if __name__ == '__main__':
    Application()



