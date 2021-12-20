this.insert=function(head,data){
    if(head==null){
        return new Node(data);
    }
    else{
        var current=head;
        while(current.next!=null){
        current=current.next;
        }
        current.next=new Node(data);
        return head;
    }
}