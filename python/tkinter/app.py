import tkinter as tk #gui

root = tk.Tk()

class Application():
    def __init__(self):
        self.root = root
        self.screen()
        self.frames()
        root.mainloop()
    
    #screen configs
    def screen(self):
        self.root.title('login')
        self.root.configure(background='#333355')
        self.root.resizable(True,True)
        self.root.geometry('500x300')
        self.root.maxsize(width=900, height=700)
        self.root.minsize(width=400, height=300)
    
    def frames(self):

        self.frame_1 = tk.Frame(self.root, bd=4, bg='#DDDDDD',
                                highlightbackground='#D0D0D0', highlightthickness=3)
        self.frame_1.place(relx=0.02,rely=0.02, relwidth=0.96,relheight=0.47) 
        #0 == 0%
        #1 == 100%
        #0.5 == 50%
        self.frame_1 = tk.Frame(self.root, bd=4, bg='#DDDDDD',
                                highlightbackground='#D0D0D0', highlightthickness=3)
        self.frame_1.place(relx=0.02,rely=0.51, relwidth=0.96,relheight=0.47) 



if __name__ == '__main__':
    Application()



